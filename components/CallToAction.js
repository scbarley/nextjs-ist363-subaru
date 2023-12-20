import styles from './calltoaction.module.scss';
import Button from './Button';
import Container from './Container';
import Heading from './Heading';
import Link from 'next/link';
import { getDesktopNavItems } from '../lib/nav';

const CallToAction = ({ children }) => {
    const navItems = getDesktopNavItems();
    return <div className={styles.calltoaction}>
        <Container>
            <Heading level={2} color="white" marginBottom={2} textAlign="center">
                Get Behind the Wheel
            </Heading>
            <p> 
                Start customizing your car today, or contact your local Subaru dealer to experience one in person.
            </p>

            <div className={styles.calltoaction__buttons}>
                <Link href='/build-price' className={styles.calltoaction__buttons__links}>
                    <Button type="primary">
                        Build & Price    
                    </Button>
                </Link>
                
                <Link href='/contact' className={styles.calltoaction__buttons__links}>
                    <Button type="secondary"> 
                        Contact Dealer
                    </Button> 
                </Link>
                
            </div>            
        </Container>
    </div>
}
export default CallToAction;