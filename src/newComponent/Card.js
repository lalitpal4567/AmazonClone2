const MainProductScreen = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                Main Div
            {children}
        </div>


    )
}
export default function Test1() {
    const CustomHeading = () => {
        return (
            <>
                <h2>Child Heading</h2>
                <h2>Child Heading</h2>
                <h2>Child Heading</h2>
                <h2>Child Heading</h2>
            </>
        
        );
    };

    // 👇️ pass children to the Center component
    return (
        <div>
            <MainProductScreen>
                <CustomHeading />
            </MainProductScreen>
        </div>
    );
}
