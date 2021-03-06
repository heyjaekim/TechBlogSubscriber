package toy.feed.domain.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FeedBoard extends BaseTime {

    @Id @GeneratedValue
    @Column(name = "feed_board_id")
    private Long id;

    private String company;

    private String imgPath;

    private String title;

    private String guid;

}
