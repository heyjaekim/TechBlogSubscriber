package toy.feed.factory.appendices;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Company {
    private String key;

    private String name;

    private String imgPath;
}
