import { Container, Typography } from "@mui/material";
import { default as useStyles } from "~/components/themes/header/styles";
import { useStoreConfig } from "~/stores/store-config";

export default function Header () {
  const styles = useStyles();
  const storeConfig = useStoreConfig();
  const logoUrl = storeConfig.base_media_url + 'logo/' + storeConfig.header_logo_src;

  return(
    <header className={styles.header}>
      <Container className={styles.headerContainerTop}>
        <div className={styles.logoWrapper}>
          <img src={logoUrl} alt=""  className={styles.headerLogo}/>
        </div>
      </Container>
      <Container>
        sfgsdgf
      </Container>
    </header>
  );
}