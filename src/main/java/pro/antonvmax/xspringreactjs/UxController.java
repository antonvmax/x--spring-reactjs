package pro.antonvmax.xspringreactjs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ux/")
public class UxController {

    private static final Logger log = LoggerFactory.getLogger(UxController.class);

    public UxController() {}

}
