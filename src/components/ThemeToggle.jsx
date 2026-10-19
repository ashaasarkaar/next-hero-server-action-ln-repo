"use client";
import { useTheme } from "next-themes";
import {Sun, Moon} from "@gravity-ui/icons";
import { Switch} from "@heroui/react";

  // <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        //     Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        // </button>

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
      
        <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}  size="lg">
          {({isSelected}) => (
            <Switch.Content>
              <Switch.Control className={isSelected ? '' : ""}>
                <Switch.Thumb>
                  <Switch.Icon>
                    {isSelected ? (
                      <Sun className="size-3 text-inherit opacity-100" />
                    ) : (
                      <Moon className="size-3 text-inherit opacity-70" />
                    )}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </Switch.Content>
          )}
        </Switch>
    );
};

export default ThemeToggle;