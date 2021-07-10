package toy.feed.domain;

import lombok.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class RSSFeedMessage {
    
    private String title;
    private String company;
    private String imgPath;
    private String link;
    private String author;
    private String guid;
    private String pubDate;

}


