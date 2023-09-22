export default function Featured({children}) {
    return (
        <section className="h-full w-full px-8 lg:px-36">
            <div className="grid grid-flow-col gap-10 overflow-x-auto ">
                {children}
            </div>
        </section>
    );
}