package pro.antonvmax.xspringreactjs.SomeEntry;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SomeEntryRepository extends JpaRepository<SomeEntry, String> {
    List<SomeEntry> findAllByTextContains(String text);
}
