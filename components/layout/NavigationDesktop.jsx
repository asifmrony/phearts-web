import { useState } from "react";
import styles from '../../styles/Navigation.module.css'
import Link from "next/link";
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';

const NavigationDesktop = (props) => {
    const { navLinksData } = props;
    const [showSubMenu, setShowSubMenu] = useState([]);

    const subMenuOnMouseEnterHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            console.log("running");
            let arr = [...prev];
            arr[subMenuId] = true;
            return arr;
        });
    };
    const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            console.log("running");
            let arr = [...prev];
            arr[subMenuId] = false;
            return arr;
        });
    };

    return (
        <nav>
            <ul className={styles.mainNav}>
                {navLinksData.map((el, i) => {
                    if (!el.children) {
                        return (
                            <li key={el.id}>
                                <Link href={el.link} className={styles.headerNavLink}>
                                    <span>{el.name}</span>
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li
                            onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
                            onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
                            key={el.id}
                            className={`${styles.headerNavOptions} ${styles.optionsHover}`}
                        >
                            <div className={styles.headerNavDiv}>
                                <span>{el.name}</span>
                                <span>{showSubMenu[el.id] ? <BsChevronDown size={13} /> : <BsChevronRight size={13} />}</span>
                            </div>
                            <ul
                                className={styles.headerNavUl}
                            >
                                {showSubMenu[el.id] &&
                                    el.children.map((ele) => {
                                        if (!ele.children) {
                                            return (
                                                <li key={ele.id} className={styles.subMenuLi}>
                                                    <Link
                                                        href={ele.link}
                                                        className={styles.subMenuLink}
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        <span>{ele.name}</span>
                                                    </Link>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li
                                                onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                                                onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                                                key={ele.id}
                                                className={`${styles.subMenuOptions} ${styles.subMenuHover}`}
                                            >
                                                <div className={styles.subMenuDiv}>
                                                    <span>{ele.name}</span>
                                                    <span className={styles.arrow}>{"-->"}</span>
                                                </div>
                                                <ul
                                                    className={styles.subMenuUl}
                                                >
                                                    {showSubMenu[ele.id] &&
                                                        ele.children.map((elem) => {
                                                            return (
                                                                <li key={elem.id} className={styles.grandChildLink}>
                                                                    <Link href={elem.link}>
                                                                        <span>{elem.name}</span>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                </ul>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavigationDesktop;