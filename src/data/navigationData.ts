interface NavItem {
    stepNo: number;
    navStep: string;
    navDetails: string;
    
}

 const navData: NavItem[] = [
        {
            stepNo: 1,
            navStep: 'STEP 1',
            navDetails: 'YOUR INFO',
        },
        {
            stepNo: 2,
            navStep: 'STEP 2',
            navDetails: 'SELECT PLAN',
    
        },
        {
            stepNo: 3,
            navStep: 'STEP 3',
            navDetails: 'ADD-ONS',
            
        },
        {
            stepNo: 4,
            navStep: 'STEP 4',
            navDetails: 'SUMMARY',
            
        },
];
    
export {navData}