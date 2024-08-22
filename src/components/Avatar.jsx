import PropTypes from "prop-types";

import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src, alt }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}

Avatar.propTypes = {
  hasBorder: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
