import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../store/action';
import { AppState } from '../../../store/reducers';
import styles from './ToggleButton.module.scss'; 


const ToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: AppState) => state.theme);
    // console.log(theme);
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const [mode, setMode] = useState(theme);
  useEffect(() => {
    setMode(theme);
    console.log(mode);
  }, [theme]);
  
  return (
    <div className={styles.container} onClick={handleToggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default ToggleButton;
