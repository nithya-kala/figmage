import type { NextPage } from "next"
import {
  AppShell,
  Container,
  createStyles,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { HeaderResponsive } from "../components/HeaderResponsive"
import { useBooleanToggle } from "@mantine/hooks"

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    padding: 10,
  },

  content: {
    flex: 1,
    padding: 10,
    border: "1px solid #e9ecef",
    borderRadius: 6,
    marginRight: 10,
    backgroundImage: `
    linear-gradient(45deg, #e9ecef 25%, transparent 25%), 
    linear-gradient(135deg, #e9ecef 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e9ecef 75%),
    linear-gradient(135deg, transparent 75%, #e9ecef 75%)`,
    backgroundSize: "25px 25px" /* Must be a square */,
    backgroundPosition:
      "0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px" /* Must be half of one side of the square */,
  },

  aside: {
    width: 240,
    height: "100%",
    backgroundColor: "white",
    padding: 10,
    border: "1px solid #e9ecef",
    borderRadius: 6,
  },
}))

const mainLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
]

const Home: NextPage = () => {
  const theme = useMantineTheme()
  const { classes, cx } = useStyles()
  const [opened, toggleOpened] = useBooleanToggle(false)

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      padding={0}
      header={
        <HeaderResponsive
          links={mainLinks}
          opened={opened}
          toggleOpened={toggleOpened}
        />
      }
    >
      <Container className={classes.root}>
        <div className={classes.content}>Hello</div>
        <aside className={classes.aside}>
          <Text>Application sidebar</Text>
        </aside>
      </Container>
    </AppShell>
  )
}

export default Home
