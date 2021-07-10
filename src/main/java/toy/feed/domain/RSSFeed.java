package toy.feed.domain;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class RSSFeed {
    
    private String title;
    private String link;
    private String language;
    private String copyright;
    private String pubDate;
    private List<RSSFeedMessage> messages = new ArrayList<>();
    
    public RSSFeed (String title, String link,
                    String language, String copyright, String pubDate) {
        this.title = title;
        this.link = link;
        this.language = language;
        this.copyright = copyright;
        this.pubDate = pubDate;
    }

}

