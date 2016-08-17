package myslef_test;

import java.applet.Applet;
import java.awt.*;

/**
 * Created by JobQ on 2016/8/17.
 */
public class Ch1_3 extends Applet {
    int x, y;

    public void start()

    {
        Graphics g = getGraphics();
        for (x = 0; x <= 750; x++) {
            g.drawString("*", x, 200);
        }

        for (x = 740; x < 750; x++) {
            g.drawString("*",x,x-550);

        }
    }
}
