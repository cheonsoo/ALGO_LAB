import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleArcordian } from '@/store/modules/home';
import { IApp } from '@/types';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

interface CardSimpleProps {
  id: string;
  type: string;
  title: string;
  desc: string;
  thumbnail: string;
  created: string;
  updated: string;
}

export default function CardSimple(props: CardSimpleProps) {
  const {
    accordian: { opened }
  } = useSelector((state) => state as any);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToggle = useCallback((id: string) => dispatch(toggleArcordian(id)), [dispatch]);

  const handleExpandClick = (id: string) => {
    onToggle(opened === id ? '' : id);
  };

  const handleClick = (id: string, type: string) => {
    console.log(`id: ${id}, type: ${type}`);
    if (type === 'app') {
      navigate(`/app/${id}`);
    } else {
      navigate(`/post/${id}`);
    }
  };

  return (
    <Card sx={{ width: '100%', marginBottom: '20px' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.created}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}
        >
          {props.desc}
        </Typography>
      </CardContent>
      <Collapse in={opened === props.id} collapsedSize={300} timeout="auto">
        <CardMedia
          component="img"
          height="100%"
          image={props.thumbnail}
          alt="thumbnail"
          sx={{ objectFit: 'contain' }}
          loading="lazy"
          onClick={() => handleClick(props.id, props.type)}
        />
      </Collapse>
      <CardActions disableSpacing>
        <ExpandMore
          expand={opened === props.id}
          aria-expanded={opened === props.id}
          aria-label="show more"
          onClick={() => handleExpandClick(props.id)}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
