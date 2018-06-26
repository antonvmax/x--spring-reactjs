package pro.antonvmax.xspringreactjs.SomeEntry;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class SomeEntry {

    //@JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min=1, max=15)
    @JsonProperty("text")
    public String text;

    @Min(0)
    @Max(1)
    @NotNull
    @JsonProperty("isFlag")
    private Integer isFlag;

    public SomeEntry() {
    }

    public SomeEntry(@NotNull @Size(min = 1, max = 15) String text, @Min(0) @Max(1) @NotNull Integer isFlag) {
        this.text = text;
        this.isFlag = isFlag;
    }

    @Override
    public String toString() {
        return "SomeEntry{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", isFlag=" + isFlag +
                '}';
    }

    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Integer getIsFlag() {
        return isFlag;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setIsFlag(Integer isFlag) {
        this.isFlag = isFlag;
    }
}
