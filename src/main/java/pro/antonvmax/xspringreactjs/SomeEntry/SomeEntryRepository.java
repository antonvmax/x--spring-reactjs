package pro.antonvmax.xspringreactjs.SomeEntry;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SomeEntryRepository extends JpaRepository<SomeEntry, String> {
    List<SomeEntry> findAllByTextContains(String text);
    Optional<SomeEntry> findOneByText(String text);
}
