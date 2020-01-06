NDSummary.OnToolTipsLoaded("MoonScriptClass:TableX",{139:"<div class=\"NDToolTip TClass LMoonScript\"><div class=\"TTSummary\">A static class used for table-specific utility functions that are not specific to Garry\'s Mod.</div></div>",141:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype141\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Count: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">t&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Counts the number of elements in a table using pairs.</div></div>",142:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype142\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@IsEmpty: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">t&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Checks if a table contains any values on any type of key.</div></div>",143:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype143\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Empty: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">t&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Removes all data from a table.</div></div>",144:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype144\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Copy: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">t&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Make a shallow copy of a table. A shallow copy means that any subtables will still refer to the	same underlying table.</div></div>",145:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype145\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@CopyI: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">t&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Exactly the same as Copy except that it uses fori instead of pairs.&nbsp; In general, this means that it only copies numeric keys. See &lt;A Discussion On fori&gt;.</div></div>",146:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype146\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@DeepCopy: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">t&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Make a deep copy of a table. A deep copy means that any subtables will refer to a new copy of the original subtable.</div></div>",147:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@RemoveDuplicateValues: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">list,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Removes any duplicate values from a list.</div></div>",148:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype148\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@UnionByKey: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Merges two tables by key.</div></div>",149:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype149\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@UnionByKeyI: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Exactly the same as UnionByKey except that it uses fori instead of pairs. In general, this means that it only merges on numeric keys. See &lt;A Discussion On fori&gt;.</div></div>",150:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype150\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Union: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Gets the union of two lists by value. If a value occurs once in listA and once in listB, the result of the union will only have one instance of that value as well.</div></div>",151:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype151\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@IntersectionByKey: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableA,</td></tr><tr><td class=\"PModifierQualifier first\">tableB&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Gets the intersection of two tables by key.</div></div>",152:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype152\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@IntersectionByKeyI: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableA,</td></tr><tr><td class=\"PModifierQualifier first\">tableB&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Exactly the same as IntersectionByKey except that it uses fori instead of pairs. In general, this means that it only merges on numeric keys. See &lt;A Discussion On fori&gt;.</div></div>",153:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype153\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Intersection: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Gets the intersection of two lists by value.</div></div>",154:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype154\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@DifferenceByKey: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Gets the difference of two tables by key. Difference is defined as all the keys in table A that are not in table B.</div></div>",155:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype155\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@DifferenceByKeyI: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">tableB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Exactly the same as DifferenceByKey except that it uses fori instead of pairs. In general, this means that it only performs the difference on numeric keys. See &lt;A Discussion On fori&gt;.</div></div>",156:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype156\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Difference: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Gets the difference of two lists by value.</div></div>",157:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype157\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@Append: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listA,</td></tr><tr><td class=\"first\"></td><td></td><td class=\"PName last\">listB,</td></tr><tr><td class=\"PModifierQualifier first\">inPlace&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Appends values with numeric keys from one table to another.</div></div>",158:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype158\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@HasValue: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">t,</td></tr><tr><td class=\"PModifierQualifier first\">value&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Checks for the presence of a value in a table.</div></div>",159:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype159\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@HasValueI: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td></td><td class=\"PName last\">t,</td></tr><tr><td class=\"PModifierQualifier first\">value&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Exactly the same as HasValue except that it uses fori instead of pairs.&nbsp; In general, this means that it only checks numeric keys. See &lt;A Discussion On fori&gt;.</div></div>",160:"<div class=\"NDToolTip TFunction LMoonScript\"><div id=\"NDPrototype160\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@SetFromList: (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">list&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">using</span>&nbsp;</td><td class=\"PName last\">nil</td></tr></table></td><td class=\"PAfterParameters\">) -&gt;</td></tr></table></div><div class=\"TTSummary\">Creates a set from a list. A list is defined as a table with all numeric keys in sequential order (such as {&quot;red&quot;, &quot;yellow&quot;, &quot;green&quot;}).&nbsp; A set is defined as a table that only uses the boolean value true for keys that exist in the table.&nbsp; This function takes the values from the list and makes them the keys in a set, all with the value of \'true\'.&nbsp; Note that you lose ordering and duplicates in the list during this conversion, but gain ease of testing for a value\'s existence in the table.&nbsp; One simply needs to test whether the value of a key is true or nil.</div></div>"});