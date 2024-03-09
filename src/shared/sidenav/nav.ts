import { faCirclePlay, faSquarePollVertical, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export const navList = [
    {
      name:"Dashboard",
      id:1,
      icon:faSquarePollVertical,
      redirect:"/"
    },
    {
      name:"Videos",
      id:1,
      icon:faCirclePlay,
      redirect:"/videos"
    },{
      name:"products",
      id:1,
      icon:faTag,
      redirect:"/products"
    }
  ]