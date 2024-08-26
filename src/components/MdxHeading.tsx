'use client'

import styles from "./MdxHeadings.module.css";
import { useState, useEffect } from "react";
import GithubSlugger from "github-slugger";

const MdxHeading = ({ h, id, ...rest }:{h:any,id:any}) => {
  // ensure the page has fully loaded before running

  console.log("h", h)
  const [hasMounted, setHasMounted] = useState(false);
  const VariableHeader = h;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  // if our heading "H" tag has a class of "id"
  // if it has an ID return this correct heading with the class associated
  if (id) {
    const slugger = new GithubSlugger();
    console.log("slugger", slugger)
    return (
      <VariableHeader
        id={`${slugger.slug(id)}`}
        className={styles.mdx_heading}
        {...rest}
      />
    );
  }
  // if not return a regular unlinked header
  return <h1 {...rest} />;
};

// cycle through and make H1 - H6 heading tags to use
export const MdxH1 = (props:any) => <MdxHeading h='h1' id={`${props.children}`} {...props} />
export const MdxH2 = (props:any) => <MdxHeading h='h2' id={`${props.children}`} {...props} />;
export const MdxH3 = (props:any) => <MdxHeading h='h3' id={`${props.children}`} {...props} />;
export const MdxH4 = (props:any) => <MdxHeading h='h4' id={`${props.children}`} {...props} />;
export const MdxH5 = (props:any) => <MdxHeading h='h5' id={`${props.children}`} {...props} />;
export const MdxH6 = (props:any) => <MdxHeading h='h6' id={`${props.children}`} {...props} />;

