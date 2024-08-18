import CardItem from "@/app/components/CardItem";

const page = () => {
    return (
        <div>

            <div className="grid grid-cols-3">
                <CardItem img={"https://vectorseek.com/wp-content/uploads/2023/06/Illustrator-Icon-Vector-300x300.jpg"}
                    title="ADOBE ILLUSTRATOR"
                    subtitle="Advance"
                />
                <CardItem img={"https://i.pinimg.com/564x/c6/cb/46/c6cb46e898757fd90857826455e3785f.jpg"}
                    title="ADOBE PHOTOSHOP"
                    subtitle="Advance"
                />
                <CardItem img={"https://i.pinimg.com/564x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg"}
                    title="FIGMA"
                    subtitle="Advance"
                />
                <CardItem img={"https://i.pinimg.com/564x/7c/69/08/7c69082bd4c00c05dedb496792e9f1d1.jpg"}
                    title="BLENDER"
                    subtitle="Advance"
                />
                <CardItem img={"https://i.pinimg.com/564x/3e/6b/a0/3e6ba0ada34716cb503af47a568175a5.jpg"}
                    title="CAPCUT"
                    subtitle="ADVANCE"
                />
                <CardItem img={"https://cyberspace.mx/wp-content/uploads/2020/10/pr.png"}
                    title="ADOBE PREMIER PRO"
                    subtitle="ADVANCE"
                />


            </div>



        </div>
    );
};

export default page;