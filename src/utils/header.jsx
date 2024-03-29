import { useScrollTrigger } from '@mui/material';
import Slide from '@mui/material/Slide';


export default function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}