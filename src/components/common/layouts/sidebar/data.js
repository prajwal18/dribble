// ICONS
import TuneIcon from "@mui/icons-material/Tune";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LinkIcon from "@mui/icons-material/Link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import EuroIcon from "@mui/icons-material/Euro";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
// ICONS

/*

type SidebarListItem = {
  id: number,
  name: string,
  icon: any,
  to: string
}

type SidebarSection = {
  id: number,
  name?: string,
  logo?: any,
  list: Array<SidebarListItem> 
}

type DataType = Array<SidebarSection>

*/

export const data = [
  {
    id: 1,
    list: [
      {
        id: 1,
        name: "Recent",
        icon: () => <AccessTimeIcon />,
        to: "/recent",
      },
      {
        id: 2,
        name: "Library",
        icon: () => <DashboardOutlinedIcon />,
        to: "/library",
      },
      {
        id: 3,
        name: "Links",
        icon: () => <LinkIcon />,
        to: "/links",
      },
      {
        id: 4,
        name: "Private",
        icon:() => <AccountCircleOutlinedIcon />,
        to: "/private",
      },
    ],
  },
  {
    id: 2,
    name: "Teams",
    logo: () => <TuneIcon sx={{ color: "#CBD5E0" }} />,
    list: [
      {
        id: 1,
        name: "Law",
        icon: () => <ScaleOutlinedIcon />,
        to: "/law",
      },
      {
        id: 2,
        name: "Sales",
        icon: () => <EuroIcon />,
        to: "/sales",
      },
      {
        id: 3,
        name: "Business",
        icon: () => <WorkOutlineIcon />,
        to: "/business",
      },
      {
        id: 4,
        name: "Desing",
        icon: () => <BrushOutlinedIcon />,
        to: "/design",
      },
      {
        id: 5,
        name: "Marketing",
        icon: () => <QuestionAnswerOutlinedIcon />,
        to: "/marketing",
      },
    ],
  },
];
