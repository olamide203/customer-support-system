import {
    Root,
    Trigger,
    Portal,
    Content,
    Item,
    Sub,
    SubContent,
    SubTrigger,
} from '@radix-ui/react-dropdown-menu';

interface Option {
    id: number;
    name: string;
    children?: Option[];
}

interface SubMenuProps {
    options: Option[];
    name: string;
    onSelect: any;
    list?: any;
}

interface MenuProps {
    options: Option[];
    children: React.ReactNode;
    onSelect?: any;
    onValueChange?: any;
}

interface MenuItemProps {
    value: string;
    onSelect: (val: string) => void;
    list?: any;
}

const MenuItem = ({ onSelect, value, list }: MenuItemProps) => {
    const handleSelect = () => {
        console.log('kdkdkd\n', list);
        onSelect(value);
    };
    return (
        <Item
            className="text-[14px] leading-none text-neutral-900  flex items-center h-[45px] px-[10px] py-[12] relative select-none outline-none data-[disabled]:text-neutral-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[highlighted]:text-neutral-800 capitalize"
            onSelect={handleSelect}
        >
            {value}
        </Item>
    );
};

const SubMenu = ({ options, name, onSelect }: SubMenuProps) => {
    return (
        <Sub>
            <SubTrigger className="text-[14px] leading-none text-neutral-900 flex items-center h-[45px] px-[10px] py-[12] relative select-none outline-none data-[state=open]:bg-neutral-200 data-[state=open]:text-neutral-800 data-[disabled]:text-neutral-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[highlighted]:text-800 data-[highlighted]:data-[state=open]:bg-neutral-200 data-[highlighted]:data-[state=open]:text-neutral-800 capitalize">
                {name}
            </SubTrigger>
            <Portal>
                <SubContent
                    className="font-poppins min-w-[200px] bg-white rounded border border-[#CCC] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade [&>*:nth-child(even)]:border-y [&>*:nth-child(even):border-y-neutral-300"
                    sideOffset={2}
                    alignOffset={-5}
                >
                    {options.map((option) =>
                        option.children ? (
                            <SubMenu
                                options={option.children}
                                name={option.name}
                                key={option.id}
                                onSelect={onSelect}
                            />
                        ) : (
                            <MenuItem
                                value={option.name}
                                key={option.id}
                                onSelect={onSelect}
                                list={option}
                            />
                        )
                    )}
                </SubContent>
            </Portal>
        </Sub>
    );
};

const DropdownMenu = ({ options, children, onSelect }: MenuProps) => {
    return (
        <Root>
            <Trigger asChild>{children}</Trigger>

            <Portal>
                <Content
                    className="font-poppins min-w-[200px] bg-white rounded border border-[#CCC] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade [&>*:nth-child(even)]:border-y [&>*:nth-child(even):border-y-neutral-300"
                    sideOffset={5}
                >
                    {options?.map((option: any) =>
                        option.children ? (
                            <SubMenu
                                options={option.children}
                                name={option.name}
                                key={option.id}
                                onSelect={onSelect}
                            />
                        ) : (
                            <MenuItem
                                value={option.name}
                                onSelect={onSelect}
                                key={option.id}
                                list={option}
                            />
                        )
                    )}
                </Content>
            </Portal>
        </Root>
    );
};

const MenuItem2 = ({ onSelect, value, list }: MenuItemProps) => {
    const handleSelect = () => {
        console.log('kdkdkd\n', list);
        onSelect(list);
    };
    return (
        <Item
            className="text-[14px] leading-none text-neutral-900  flex items-center h-[45px] px-[10px] py-[12] relative select-none outline-none data-[disabled]:text-neutral-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[highlighted]:text-neutral-800 capitalize"
            onSelect={handleSelect}
        >
            {value}
        </Item>
    );
};

const SubMenu2 = ({ options, name, onSelect, list }: SubMenuProps) => {
    return (
        <Sub>
            <SubTrigger className="text-[14px] leading-none text-neutral-900 flex items-center h-[45px] px-[10px] py-[12] relative select-none outline-none data-[state=open]:bg-neutral-200 data-[state=open]:text-neutral-800 data-[disabled]:text-neutral-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-200 data-[highlighted]:text-800 data-[highlighted]:data-[state=open]:bg-neutral-200 data-[highlighted]:data-[state=open]:text-neutral-800 capitalize">
                {name}
            </SubTrigger>
            <Portal>
                <SubContent
                    className="font-poppins min-w-[200px] bg-white rounded border border-[#CCC] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade [&>*:nth-child(even)]:border-y [&>*:nth-child(even):border-y-neutral-300"
                    sideOffset={2}
                    alignOffset={-5}
                >
                    {options?.map((option: any) =>
                        option.children ? (
                            <SubMenu
                                options={option.children}
                                name={option.description}
                                key={option.id}
                                onSelect={onSelect}
                            />
                        ) : (
                            <MenuItem
                                value={option.description}
                                key={option.id}
                                onSelect={onSelect}
                                list={option}
                            />
                        )
                    )}
                </SubContent>
            </Portal>
        </Sub>
    );
};

export const DropdownMenu2 = ({
    options,
    children,
    onValueChange,
}: MenuProps) => {
    return (
        <Root>
            <Trigger asChild>{children}</Trigger>

            <Portal>
                <Content
                    className="font-poppins min-w-[200px] bg-white rounded border border-[#CCC] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade [&>*:nth-child(even)]:border-y [&>*:nth-child(even):border-y-neutral-300"
                    sideOffset={5}
                >
                    {options?.map((option: any) =>
                        option.subcategories.length > 0 ? (
                            <SubMenu2
                                options={option.subcategories}
                                name={option?.description}
                                key={option.id}
                                onSelect={onValueChange}
                                list={option}
                            />
                        ) : (
                            <MenuItem2
                                value={option?.description}
                                onSelect={onValueChange}
                                key={option?.id}
                                list={option}
                            />
                        )
                    )}
                </Content>
            </Portal>
        </Root>
    );
};

export default DropdownMenu;
