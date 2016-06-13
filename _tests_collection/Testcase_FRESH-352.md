---
title: IT FRESH-352
required data:
   AD_Orgs: Org I, Org II, Org *
layout: default
---

# IT FRESH-352
### Colored Bar similar Test
> Testcase to check if the window header
> has different colours set for each Org.


1. Log in for Org I, Org II and Org * (as Admin), in different sessions / workspaces

	* => each Org has a different colour set for the window header, and most probably also a different text
	
1. In e.g. Org I, open System Configurator (AD_SysConfig), and search for name %UI_WindowHeader_Notice%

	* => each Org has a UI_WindowHeader_Notice_Text set for the text displayed in the window header
	* => each Org has a UI_WindowHeader_Notice_FG_Color set for the colour of this text
	* => each Org has a UI_WindowHeader_Notice_BG_Color set for the colour of the window header
	
1. Play with the colours of UI_WindowHeader_Notice_BG_Color:

	|	code		|	colour	|	
	| -------------	|:---------:|
	|	#ff0000		|	red		|	
	|	#00ff00		|	green	|				
	|	#0000ff		|	blue	|	
	|	#ffff00		|	yellow	|
	|	#ffffff		|	white	|	
	|	#000000		|	black	|		
	

1. Log out and in again for each Org

	* => the colour in the window header is displayed as you set it before

1. Play with the colours of UI_WindowHeader_Notice_FR_Color:

	|	code		|	colour	|	
	| -------------	|:---------:|
	|	#ff0000		|	red		|	
	|	#00ff00		|	green	|				
	|	#0000ff		|	blue	|	
	|	#ffff00		|	yellow	|
	|	#ffffff		|	white	|	
	|	#000000		|	black	|
	
	
1. Log out and in again for each Org
	
	* => the colour of the text in the window header is displayed as you set it before

1. Set different texts for each Org in UI_WindowHeader_Notice_Text, log out and in again

	* => the text in the window header is displayed as you set it before
	
1. Inactivate UI_WindowHeader_Notice_FG_Color and UI_WindowHeader_Notice_BG_Color for Org I, but leave UI_WindowHeader_Notice_Text

1. Check the colour set in UI_WindowHeader_Notice_BG_Color, for AD_Org * and AD_Client Org I

	* => this should be set as the default colour for Org, if only the text is set for it

1. Log out and in again for Org I

	* => colour in window header is the default colour as defined above; default colour for text is white

