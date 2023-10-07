interface NavItem {
    stepNo: number;
    navStep: string;
    navDetails: string;
    path: string;
}

 const navData: NavItem[] = [
        {
            stepNo: 1,
            navStep: 'STEP 1',
            navDetails: 'YOUR INFO',
            path:'/',
        },
        {
            stepNo: 2,
            navStep: 'STEP 2',
            navDetails: 'SELECT PLAN',
            path:'plan',
        },
        {
            stepNo: 3,
            navStep: 'STEP 3',
            navDetails: 'ADD-ONS',
            path:'addons',
        },
        {
            stepNo: 4,
            navStep: 'STEP 4',
            navDetails: 'SUMMARY',
            path:'summary'
        },
];
    
export {navData}