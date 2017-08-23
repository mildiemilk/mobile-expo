import color from '../const/color.json'

export const PcStyle = 					
<style jsx global>{`
.ui.menu {
	font-size: calc(24px+1rem);
}							
.ui.menu .item {
	background: ${color.dark};
	flex-grow:1;
}
.ui.menu:hover {
	background: ${color.main};
}
.ui.menu .item>a {
	color: white;
}
.header-container{
	margin-bottom: 15px;
}
.stackable.menu{
	display: flex;
	flex-flow: row no-wrap;
	justify-content: space-around;
	width: 100vw;
	background:none;
}
`}
</style>


