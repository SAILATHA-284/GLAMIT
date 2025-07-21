import CreatePost from "./CreatePost";
import SGlamboard from "./SGlamboard";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<CreatePost />
			<SGlamboard/>
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
