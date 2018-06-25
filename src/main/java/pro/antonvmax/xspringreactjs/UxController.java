package pro.antonvmax.xspringreactjs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/ux/")
public class UxController {

    private static final Logger log = LoggerFactory.getLogger(UxController.class);

    public UxController() {}

    @RequestMapping(value = "/otherpage_somelist/", method = RequestMethod.GET)
    @ResponseBody
    String getUx_OtherPage_SomeList(final HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        // send handcrafted json to ux
        String responseBody = "{" +
                "\"otherPageSomeList\": [" +
                "{\"id\":101,\"text\":\"some101\",\"isFlag\": 0}" + "," +
                "{\"id\":102,\"text\":\"some102\",\"isFlag\": 1}" + "," +
                "{\"id\":103,\"text\":\"some103\",\"isFlag\": 1}" +
                "]" +
                "}";
        System.out.println("getUx_OtherPage_SomeList() :: response : " + responseBody);
        return responseBody;
    }
}
