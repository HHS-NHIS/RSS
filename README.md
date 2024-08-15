# Early Release tables

This repository contains the code needed to create the interactive **Rapid Surveys System (RSS) tables**
The code is provided for researchers and developers interested in creating similar interactive tables, or in customizing the SHS summary tables for personal use.



To run the tables on your local computer, first [download and install RStudio](https://www.rstudio.com/products/rstudio/download/). Then, install and load the Shiny package using the following code:
```
install.packages("shiny")
library(shiny)
```

Next, open the R programs from the [apps](apps) folder in RStudio, highlight the code and click **Run** or **Run App** (if available).
 Only one Shiny program can be run at a time in RStudio. Note that local links in the navigation bar will not work as expected when using Shiny to run the tables (an external server is needed).



## Survey background
Public health data are collected several times a year via the NCHS Rapid Surveys System. Rapid Surveys data span diverse health topics because different questions are asked anytime a new survey is conducted. Survey topics and questions are determined by CDC’s information needs at the time. This design makes Rapid Surveys a valuable tool for collecting data that can be used for knowledge, action, and impact.
## Public Domain Disclaimer

The **NCHS RSS Tables** application is a U.S. Government work developed by the National Center for Health Statistics (NCHS).
This application is in the public domain and may be used, reproduced, modified, built upon and distributed in the United States without further permission from NCHS.
Reproduction and distribution for a fee is prohibited.  This application was built based on the template provided by AHRQ's **MEPS summary tables** application (https://meps.ahrq.gov/mepstrends/home/index.html).  It is requested that in any subsequent use AHRQ and/or NCHS be given appropriate acknowledgment.
The use of the HHS or NCHS seal or logo without prior written authorization is expressly prohibited by law.  Although these data have been processed successfully on a computer system at NCHS,
 no warranty expressed or implied is made regarding the accuracy or utility of the data on any other system or for general or scientific purposes, nor shall the act of distribution constitute any such warranty.
NCHS has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality or availability of the information.  Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by NCHS.
NCHS reserves the right to assert copyright protection internationally.
