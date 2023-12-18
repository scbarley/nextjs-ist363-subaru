import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <h2>Connect with us</h2>
        <ul>
            <li><a href="https://www.facebook.com/subaruofamerica">
                <Image 
                    src={`/images/icons/facebook.svg`}
                    alt={`facebook icon`}
                    width={20}
                    height={18}
                />
            </a></li>
            <li><a href="http://instagram.com/subaru_usa#">
                <Image 
                    src={`/images/icons/instagram.svg`}
                    alt={`facebook icon`}
                    width={20}
                    height={18}
                />
            </a></li>
            <li><a href="https://www.tiktok.com/@subaruofamerica?lang=en">
                <Image 
                    src={`/images/icons/tiktok.svg`}
                    alt={`facebook icon`}
                    width={20}
                    height={18}
                />
            </a></li>
            <li><a href="http://www.youtube.com/user/Subaru">
                <Image 
                    src={`/images/icons/twitter.svg`}
                    alt={`facebook icon`}
                    width={20}
                    height={18}
                />
            </a></li>
        </ul>
        <p>Copyright 2023 Subaru.</p>
    </footer>
};
export default Footer