import { useState } from "react";
import useStyles from "./OpinionEdit.styles";
import user from "../../../../assets/img/user.svg";
import Score from "../Score/Score";
import StarRating from "../StarRating/StarRating";
import ApproveDelete from "../ApproveDelete/ApproveDelete";

const OpinionEdit = ({ rating, onChangeRating }) => {
  const classes = useStyles();
  const [value, setValue] = useState(rating);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper, tellus at aliquam mollis, mi lorem pretium turpis, sed facilisis nisi elit vitae dui. Suspendisse at feugiat ligula. Ut feugiat leo sed risus tempor dignissim");
  const [editText, setEditText] = useState(text);
  const [isOpen, setIsOpen] = useState(0);

  const handleApproveClick = () => {
    setIsOpen(1);
  };

  const handleDeleteClick = () => {
    setIsOpen(2);
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditText(text);
    onChangeRating(value);
  };

  const handleSaveClick = () => {
    setEditing(false);
    setText(editText);
    onChangeRating(value);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setValue(rating);
  };

  const handleTextChange = (event) => {
    setEditText(event.target.value);
  };

  const opinionContent = () => {
    if (editing) {
      return (
        <>
          <div>
            <div className={classes.blockRating}>
              <p className={classes.subtitle}>Calificación</p>
              <StarRating value={value} setValue={setValue} />
            </div>
          </div>
          <div className={classes.buttons}>
            <button className={`${classes.button} ${classes.editButton}`} onClick={handleSaveClick}>GUARDAR</button>
            <button className={`${classes.button} ${classes.deleteButton}`} onClick={handleCancelClick}>CANCELAR</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={classes.buttons}>
            <button className={`${classes.button} ${classes.approveButton}`} onClick={handleApproveClick}>APROBAR</button>
            <button className={`${classes.button} ${classes.editButton}`} onClick={handleEditClick}>EDITAR</button>
            <button className={`${classes.button} ${classes.deleteButton}`} onClick={handleDeleteClick}>ELIMINAR</button>
          </div>
        </>
      );
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <p>Opinion cliente</p>
      </div>

      <div className={classes.user}>
        <img src={user} alt="user" />
        <dir className={classes.data}>
          <p className={classes.name}>Cameron Williamson</p>
          <p className={classes.date}>2020-05-01 06:05:46</p>
        </dir>
      </div>

      <div className={classes.blockOpinion}>
        <div className={classes.score}>
          <p>Opinion</p>
          <div className={classes.stars}>
            <Score value={value} />
          </div>
        </div>
        
        <div className={classes.textOpinion}> 
            {editing ? <textarea value={editText} className={classes.textarea} onChange={handleTextChange}></textarea> : <div className={classes.opinion}>{text}</div>}
        </div>
        
      </div>
      {opinionContent()}
      <ApproveDelete isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default OpinionEdit;
