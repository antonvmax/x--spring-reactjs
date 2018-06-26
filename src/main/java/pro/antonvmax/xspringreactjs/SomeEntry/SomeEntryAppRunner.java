package pro.antonvmax.xspringreactjs.SomeEntry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pro.antonvmax.xspringreactjs.UxController;

import java.util.Optional;

@Component
public class SomeEntryAppRunner implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(UxController.class);

    SomeEntryRepository someEntryRepository;

    public SomeEntryAppRunner(SomeEntryRepository someEntryRepository) {
        this.someEntryRepository = someEntryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        log.info("SomeEntryAppRunner::run()");

        // save a couple of entries
        someEntryRepository.save(new SomeEntry("sometext111", 1));
        someEntryRepository.save(new SomeEntry("othertext112", 1));
        someEntryRepository.save(new SomeEntry("anothertext113", 0));

        // fetch all
        log.info("SomeEntries found with findAll():");
        log.info("-------------------------------");
        for (SomeEntry someEntry : someEntryRepository.findAll()) {
            log.info(someEntry.toString());
        }
        log.info("");
    }
}
