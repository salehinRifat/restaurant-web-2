import { useState } from 'react';
import orderBg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
    const { category } = useParams();
    const categories = ['salad', 'pizza', 'soup', 'dessert']
    const index = categories.indexOf(category);
    const [salad] = useMenu('salad')
    const [dessert] = useMenu('dessert')
    const [soup] = useMenu('soup')
    const [pizza] = useMenu('pizza')
    const [drinks] = useMenu('drinks')

    const [tabIndex, setTabIndex] = useState(index);
    return (
        <div>
            <Cover img={orderBg} title="OUR SHOP" description="Would you like to try a dish?"></Cover>
            <section className='my-5'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center">
                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default Order;