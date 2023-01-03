import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counder() {
  const [like, setLike] = useState(0);
  const [dlike, setdlike] = useState(0);


   
  return (
    <div>
      <IconButton aria-label="likebtn"
      onClick={() => {
        setLike(like + 1);
        
      }}
      >
        <Badge badgeContent={like}  color="primary">
      
   
        👍</Badge>
      </IconButton>
      <IconButton aria-label="likebtn"
      onClick={() => {
        setdlike(dlike + 1);
      }}><Badge badgeContent={dlike}  color="error"> 👎
      </Badge></IconButton>
     
    </div>

  );
}
