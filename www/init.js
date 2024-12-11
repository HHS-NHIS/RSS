var isPivot = false; var initCols = [
                      { title: "Year", className: "sub", "visible": false},
                      { title: "row_var", className: "sub", "visible": false},
                      { title: "rowLevels" , className: "main"},
                      { title: "rowLevNum" , className: "sub", "visible": false},
                      { title: "selected",   className: "sub", "visible" : false},
                      
                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay},

                  {title: "", className: "coef", searchable: false, render: coefDisplay},

                {title: "", className: "se", searchable: false, render: seDisplay}]; var initLevels = {"agegrps":{"agegrpsA":"0-5 years","agegrpsB":"6-11 years","agegrpsC":"12-17 years"},"metro":{"metroA":"Large central metro","metroB":"Large fringe metro","metroC":"Medium and small metro","metroD":"Nonmetropolitan"},"poverty":{"povertyA":"Less than 100% FPL","povertyB":"100% to less than 200% FPL","povertyC":"200% and greater FPL"},"race":{"raceA":"American Indian or Alaska Native alone","raceB":"Asian alone","raceC":"Black or African American alone","raceD":"Hispanic or Latino alone","raceE":"Middle Eastern or North African alone","raceF":"Native Hawaiian or Pacific Islander alone","raceG":"White alone","raceH":"Multiracial and/or Multiethnic"},"race_aoic":{"race_aoicA":"American Indian or Alaska Native alone or in combination","race_aoicB":"Asian alone or in combination","race_aoicC":"Black or African American alone or in combination","race_aoicD":"Hispanic or Latino alone or in combination","race_aoicE":"Middle Eastern or North African alone or in combination","race_aoicF":"Native Hawaiian or Pacific Islander alone or in combination","race_aoicG":"White alone or in combination"},"sex":{"sexA":"Female","sexB":"Male"},"region":{"regionB":"Midwest","regionA":"Northeast","regionC":"South","regionD":"West"}}; var subLevels = ["Physician office visits","Non-physician office visits","Physician hosp. visits","Non-physician hosp. visits"];
