package toy.feed.scheduler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import toy.feed.service.CollectPostService;
import toy.feed.service.Impl.CollectPostServiceImpl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@Component
@RequiredArgsConstructor
public class RSSScheduler {

    private final CollectPostService collectPostService;

    private final int DELAY = 1000 * 60 * 10; // 단위: ms

    @Scheduled(fixedRate = DELAY)
    public void collect() throws Exception {
        log.info("[LOGGING] Scheduler collect RSS !");
        collectPostService.getAllGroupFeed();
    }

}