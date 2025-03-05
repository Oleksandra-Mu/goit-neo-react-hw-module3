import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import css from "./Contact.module.css";
import Buttons from "../Buttons/Buttons";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactCard}>
      <div className={css.infoWrapper}>
        <div className={css.info}>
          <PersonIcon />
          <p className={css.infoText}>{name}</p>
        </div>
        <div className={css.info}>
          <CallIcon />
          <p className={css.infoText}>{number}</p>
        </div>
      </div>
      <Buttons tag="Delete" onClick={() => onDeleteContact(id)} />
    </li>
  );
};

export default Contact;
