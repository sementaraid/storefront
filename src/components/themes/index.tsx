import { Fragment } from "react";
import { default as Header } from "~/components/themes/header";
import { ITheme } from "~/components/themes/type";
import { default as useStyles } from "~/components/themes/styles";

export default function Themes ({children}: ITheme) {
  const styles = useStyles();

  return (
    <Fragment>
      <Header/>
      <div id="maincontent" className={styles.maincontent}>
        {children}
      </div>
      <footer>Footer</footer>
    </Fragment>
  )
}