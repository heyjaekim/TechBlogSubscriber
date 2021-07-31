package toy.feed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import toy.feed.domain.entity.RequestLog;

public interface RequestLogRepository extends JpaRepository<RequestLog, Long> {

}
