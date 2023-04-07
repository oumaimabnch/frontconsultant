// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [

        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/profile',
            icon: icons.BgColorsOutlined
        },
        {
            id:'Createpassword',
            title:'createpassword',
            type:'item',
            url:'/Create'
        },
        {
            id: 'PayslipTable',
            title: 'Fiche de paie ',
            type: 'item',
            url: 'PayslipTable',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
    

        {
            id: 'Consultants',
            title: 'Consultants',
            type: 'item',
            url: '/Consultants',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'util-shadow',
            title: 'Information CV',
            type: 'item',
            url: '/shadow',
            icon: icons.BarcodeOutlined
        },
      
        {
            id: 'util-typography',
            title: 'Fiche de paie',
            type: 'item',
            url: '/typography',
            icon: icons.FontSizeOutlined
        },
        
       
        
       
        {
            id: 'util-color',
            title: 'Missions',
            type: 'item',
            url: '/color',
            icon: icons.BgColorsOutlined
        },
        
       
        


       
    ]
};

export default utilities;
