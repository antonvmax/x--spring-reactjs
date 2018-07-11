package pro.antonvmax.xspringreactjs;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import pro.antonvmax.xspringreactjs.SomeEntry.SomeEntry;
import pro.antonvmax.xspringreactjs.SomeEntry.SomeEntryRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
public class UxControllerTests {

    @Mock
    private SomeEntryRepository someEntryRepository;

    private MockMvc mockMvc;

    private SomeEntry sometext111 = new SomeEntry("sometext111", 1);
    private SomeEntry othertext112 = new SomeEntry("othertext112", 1);
    private SomeEntry anothertext113 = new SomeEntry("anothertext113", 0);

    private List<SomeEntry> someEntries = new ArrayList<>();//Arrays.asList(sometext111, othertext112, anothertext113);

    @Before
    public void init() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(new UxController(someEntryRepository))
                .build();

        sometext111.setId(1L);
        othertext112.setId(2L);
        anothertext113.setId(3L);

        someEntries = Arrays.asList(sometext111, othertext112, anothertext113);
    }

//    @Test
//    public void shouldReturnStatusOk() throws Exception {
//        this.mockMvc.perform(get("/"))
//                .andExpect(status().isOk());
////                .andExpect(content().string(containsString("Hello World")));
//    }

    @Test
    public void allEntriesReturned() throws Exception {
        when(someEntryRepository.findAll()).thenReturn(someEntries);

        mockMvc.perform(get("/ux/otherpage_somelist/").accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json;charset=UTF-8"))

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
    public void booksAreReturnedForAuthor() throws Exception {
        when(someEntryRepository.findOneByText("sometext111")).thenReturn(java.util.Optional.of(sometext111));
        mockMvc.perform(get("/ux/somelist_entry/sometext111").accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("application/json;charset=UTF-8"))
                .andExpect(jsonPath("$.id").value("1"))
                .andExpect(jsonPath("$.text").value("sometext111"))
                .andExpect(jsonPath("$.isFlag").value("1"));
    }

}
