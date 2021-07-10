package toy.feed.service.Impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toy.feed.factory.FeedBoardFactory;
import toy.feed.domain.RSSFeed;
import toy.feed.parser.RSSFeedParser;
import toy.feed.repository.FeedBoardRepository;
import toy.feed.service.CollectPostService;

import java.util.List;
import java.util.Objects;

import static toy.feed.parser.JsonReader.readUrls;

@Slf4j
@Service
@RequiredArgsConstructor
public class CollectPostServiceImpl implements CollectPostService {

    private final FeedBoardRepository feedBoardRepository;
    private final FeedBoardFactory feedBoardFactory;

    @Transactional(readOnly = true)
    public void getAllGroupFeed () throws Exception {
        loopCrawl();
    }

    private void loopCrawl () throws Exception{

        List<String> urls = readUrls();

        for(String url : urls) {
            RSSFeedParser parser = new RSSFeedParser(url);
            RSSFeed feed = parser.readFeed();

            feed.getMessages()
                    .stream()
                    .map(feedBoardFactory::findFeedBoardForm)
                    .filter(Objects::nonNull)
                    .forEach(feedBoard -> {
                        log.info("[Logging <SAVE> {} : {}", feedBoard.getCompany(), feedBoard.getTitle());
                        feedBoardRepository.save(feedBoard);
                    });
        }
    }
}
