package toy.feed.parser;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.util.ResourceUtils;
import toy.feed.factory.appendices.Company;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class JsonReader {
    public static List<String> readUrls() throws IOException, ParseException {
        File file = ResourceUtils.getFile("classpath:properties/propertiesFactory.json");
        FileReader reader = new FileReader(file);
        JSONParser parser = new JSONParser();
        JSONObject jsonObj = (JSONObject) parser.parse(reader);

        return (ArrayList<String>) jsonObj.get("urls");
    }

    public static List<Company> readCompanies() throws IOException, ParseException {
        File file = ResourceUtils.getFile("classpath:properties/propertiesFactory.json");
        FileReader reader = new FileReader(file);
        JSONParser parser = new JSONParser();
        JSONObject jsonObj = (JSONObject) parser.parse(reader);

        return (ArrayList<Company>) jsonObj.get("companies");
    }
}
