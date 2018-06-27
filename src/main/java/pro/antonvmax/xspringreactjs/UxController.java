package pro.antonvmax.xspringreactjs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pro.antonvmax.xspringreactjs.SomeEntry.SomeEntry;
import pro.antonvmax.xspringreactjs.SomeEntry.SomeEntryRepository;

import java.util.Collection;

@RestController
@RequestMapping("/ux/")
public class UxController {

    private static final Logger log = LoggerFactory.getLogger(UxController.class);

    private final SomeEntryRepository someEntryRepository;

    @Autowired
    public UxController(SomeEntryRepository someEntryRepository) {
        this.someEntryRepository = someEntryRepository;
    }

    @RequestMapping(value = "/otherpage_somelist/", method = RequestMethod.GET)
    Collection<SomeEntry> getUx_OtherPage_SomeList() {
        return this.someEntryRepository.findAll();
    }

    @RequestMapping(value = "/otherpage_somelist_filtered/{text}", method = RequestMethod.GET)
    Collection<SomeEntry> getUx_OtherPage_SomeList_Filtered(@PathVariable String text) {
        return this.someEntryRepository.findAllByTextContains(text);
    }
    // try at http://127.0.0.1:8080/ux/otherpage_somelist_filtered/other

}
