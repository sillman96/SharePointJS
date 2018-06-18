//Go to this URL to see how to use this code: http://sharepoint-and-writing.blogspot.com/2015/04/alphabetical-list-quick-filter-solution.html

<script type="text/javascript">
        function qs(paramName) {
                var args = document.location.search.substring(1).split("&");
                for(j = 0; j < args.length; j++) {
                        nameValues = args[j].split("=");
                        if(nameValues[0] == paramName) return nameValues[1];
                }
                return null;
        }
        var filterField = "FL";
        var filterValuesDelimiter = " - ";
 var filterValues = new Array
("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        var selectedValueStyle = "font-weight: bold;";
 var filterDivStyle = "margin: 5px; font-size: 15px;";
        var filterLinks = new Array();
        for (var i = 0; i < filterValues.length; i++) {
                filterLinks.push('<a ' + (qs("FilterValue1") == filterValues[i] ? 'style="' + selectedValueStyle + ' ' : '') + 'href="' + document.location.pathname + '?FilterField1=' + 
filterField + '&FilterValue1=' + filterValues[i] + '">' + filterValues[i] + '</a>');
        }
        document.write('<div style="' + filterDivStyle + '">' + filterLinks.join
(filterValuesDelimiter) + '</div>');
</script>