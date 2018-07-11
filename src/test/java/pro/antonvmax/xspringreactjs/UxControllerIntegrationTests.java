package pro.antonvmax.xspringreactjs;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import pro.antonvmax.xspringreactjs.SomeEntry.SomeEntry;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UxControllerIntegrationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void returnedAllPreexistedSomeentries() throws Exception {
        final List<SomeEntry> someEntries = Arrays.asList(
                new SomeEntry("sometext111", 1),    // 1
                new SomeEntry("othertext112", 1),   // 2
                new SomeEntry("anothertext113", 0)  // 3
        );

        mockMvc.perform(get("/ux/otherpage_somelist/").accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))

                .andExpect(jsonPath("$[0].id").value("1"))
                .andExpect(jsonPath("$[0].text").value("sometext111"))
                .andExpect(jsonPath("$[0].isFlag").value("1"))

                .andExpect(jsonPath("$[1].id").value("2"))
                .andExpect(jsonPath("$[1].text").value("othertext112"))
                .andExpect(jsonPath("$[1].isFlag").value("1"))

                .andExpect(jsonPath("$[2].id").value("3"))
                .andExpect(jsonPath("$[2].text").value("anothertext113"))
                .andExpect(jsonPath("$[2].isFlag").value("0"));
    }

    @Test
    public void returnedOnePreexistedSomeentry() throws Exception {
        mockMvc.perform(get("/ux/somelist_entry/sometext111").accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json;charset=UTF-8"))

                .andExpect(jsonPath("$.id").value("1"))
                .andExpect(jsonPath("$.text").value("sometext111"))
                .andExpect(jsonPath("$.isFlag").value("1"));
    }
/*
//    @Test
//    public void shouldReturnStatusOk() throws Exception {
//        this.mockMvc.perform(get("/"))
//                .andExpect(status().isOk());
////                .andExpect(content().string(containsString("Hello World")));
//    }

    @Test
    public void booksAreReturnedForAuthor() throws Exception {
//        when(someEntryRepository.findOneByText("sometext111")).thenReturn(java.util.Optional.of(sometext111));

        mockMvc.perform(get("/ux/otherpage_somelist/").accept(MediaType.APPLICATION_JSON))
                .andDo(print());

        mockMvc.perform(get("/ux/somelist_entry/sometext111").accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("1"))
                .andExpect(jsonPath("$.text").value("sometext111"))
                .andExpect(jsonPath("$.isFlag").value("1"));

        //        				.andExpect(content().contentType("application/json;charset=UTF-8"))
    }
*/
}
