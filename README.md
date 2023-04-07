# Outline for FAQ component

Static Azure Webapp publishing to https://lively-island-0b9986810.3.azurestaticapps.net/

With each FAQ item added in the pattern provided, a quick link to a specific FAQ and auto-expand specific ones using the DIV id assigned to it.  E.g. [?q=faq2](https://lively-island-0b9986810.3.azurestaticapps.net/index.html?q=faq2) Will automatically expand the second question 

```
<div id="faq2">
	<h1 class="faq-page">Question 2</h1>
	<div class="faq-body">
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
			necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
			aperiam.<br/>
			Perspiciatis, porro!</p>
	</div>
</div>
```


## FAQ Examples:

Q1 Dependent / Child medical records are missing?

A1 We dont expose medical records for minors or dependents.

Q2 Lab Results missing?

A2 Testing we do in the office will be there. Typically lab testing we send out to 3rd part laboratries comes back within a few days.  If the lab faxes it to us, it may not be accessible in your chart. Contact the clinic for a MR request
