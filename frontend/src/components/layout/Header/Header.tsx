import type { FC } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaLaptopCode, FaGithub } from "react-icons/fa";

import { GITHUB_URL } from "../../../utils/constants/constans";

const header = css({
  height: 100,
  background: "#000000",
  display: "flex",
});

const headerNav = css({
  width: 1000,
  margin: "auto",
  display: "flex",
  borderBottom: "solid 3px #262626",
  paddingBottom: 10,
});

const link = css({
  fontFamily: "Arial Black",
  textDecoration: "none",
  color: "#F8F8FF",
  paddingRight: 15,
});

const title = css({
  fontSize: 20,
  marginRight: 50,
});

const headerNavList = css({
  display: "flex",
});

const headerNavItem = css({
  display: "flex",
  alignItems: "center",
  marginRight: 30,
});

const Header: FC = () => (
  <div css={header}>
    <nav css={headerNav}>
      <h1 css={title}>
        <Link to="/" css={[link]}>
          Akeu
        </Link>
      </h1>
      <ul css={headerNavList}>
        <li css={headerNavItem}>
          <CgProfile size="1.5em" color="white" />
          <Link to="/profile" css={link}>
            Profile
          </Link>
        </li>
        <li css={headerNavItem}>
          <MdOutlineArticle size="1.5em" color="white" />
          <Link to="/articles" css={link}>
            Article
          </Link>
        </li>
        <li css={headerNavItem}>
          <FaLaptopCode size="1.5em" color="white" />
          <Link to="/projects" css={link}>
            Projects
          </Link>
        </li>
        <li css={headerNavItem}>
          <FaGithub size="1.5em" color="white" />
          <a href={GITHUB_URL} target="_blank" css={link} rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
