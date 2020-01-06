NDSummary.OnToolTipsLoaded("MoonScriptClass:Command",{30:"<div class=\"NDToolTip TClass LMoonScript\"><div class=\"TTSummary\">Used to create a new command. Commands are always tied to the console, and optionally to chat as well.</div></div>",32:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@ShortcutFn: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">name,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">typ,</td></tr><tr><td class=\"PModifierQualifier first\">default&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Only available statically, meant for internal use only.</div></div>",33:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype33\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@ConsoleRouter: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">ply,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">commandFirstWord,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">argv,</td></tr><tr><td class=\"PModifierQualifier first\">args&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">This static callback function is primarily meant to act as the buffer between the Source console and ULX. <b>You probably should not call this directly</b>.&nbsp; This function is called by the engine, executes the appropriate callback, and prints any errors back to the caller.</div></div>",34:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@ExecutionRouter: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">ply,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">commandName,</td></tr><tr><td class=\"PModifierQualifier first\">argv&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">TODO</div></div>",36:"<div class=\"NDToolTip TVariable LMoonScript\"><div class=\"TTSummary\">All these variables are optional, with sensible defaults. <b>Do not set these directly</b>. Instead, call the setter function of the same name without the underscore. E.G., call `Name(&quot;Billy Bob&quot;)`.</div></div>",48:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype48\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">new</span>: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">name,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">callback,</td></tr><tr><td class=\"PModifierQualifier first\">plugin&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) =&gt;</td></tr></table></div><div class=\"TTSummary\">Creates a new command.</div></div>",49:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype49\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Execute: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">ply,</td></tr><tr><td class=\"PModifierQualifier first\">argvRaw&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) =&gt;</td></tr></table></div><div class=\"TTSummary\">TODO</div></div>"});