
const linkArray = [
	["/"],
	["ceo" , "history" , "vision" , "ci" , "map"],
	["business_intro" , "business_om" , "", "02_01_0031", "02_02_0011", "02_02_0021", "02_03_0011"],
	["ethical_management" , "safety_health", "fair_trade_pgm", "carbon_reduction", ""],
	["invest_news", "statement_financial_position" , "" ],
	["personnel_system", ""]
]

function link(idx , num){

    var chk = linkArray[idx][num];

    if(idx == 0){
        location.href = chk
    } else{
    	location.href = "/sub.do?MENUID=" + chk + "&MENUNO=" + idx
    }

}

function linkBBS(idx, num, bbsNo) {

    var chk = linkArray[idx][num];

    if(idx == 0){
        location.href = chk;
    } else{
    	location.href = "/bbs/data/bbsDataList.do?MENUID=" + chk + "&MENUNO=" + idx + "&bbsNo=" + bbsNo;
    }

}

function linkBusiness(idx, num) {
    var chk = linkArray[idx][num];
    var searchBsnsintrcnCode, searchClCode, ctgryNo;
    
    if( idx == 2 ){
    	if( num == 1 ){
    		searchBsnsintrcnCode = "A012001"; 
    		searchClCode = "A012003";
    		ctgryNo = "1";
    		location.href = "/env/bsnsintrcn/bsnsintrcnList.do?MENUNO=" + idx + "&SUB_MENUNO="+ num +"&searchBsnsintrcnCode=" + searchBsnsintrcnCode + "&searchClCode=" + searchClCode + "&ctgryNo=" + ctgryNo;		
    	}
    	if( num == 2 ){
    		searchBsnsintrcnCode = "A012002"; 
    		searchClCode = "A012009";
    		ctgryNo = "";
    		location.href = "/env/bsnsintrcn/bsnsintrcnList.do?MENUNO=" + idx + "&SUB_MENUNO="+ num +"&searchBsnsintrcnCode=" + searchBsnsintrcnCode + "&searchClCode=" + searchClCode + "&ctgryNo=" + ctgryNo;		
    	}
    }
}	

function linkCarbon(idx , num){

    var chk = linkArray[idx][num];

    if(idx == 3 && num == 3){
    	location.href = "/env/carbonReduc/carbonReducDtl.do?MENUID=" + idx + "&SUB_MENUNO=" + num
    }

}
		
/*
 * 파일 다운로드
 * 3,0,1: 지속가능경영 > 윤리경영 > 윤리경영 소개 > 윤리규정 준수 Message
 * 3,0,2: 지속가능경영 > 윤리경영 > 윤리경영 소개 > 윤리규정
 * 3,0,3: 지속가능경영 > 윤리경영 > 윤리경영 소개 > 윤리경영 실천가이드
 * 3,0,4: 지속가능경영 > 윤리경영 > 윤리경영 소개 > 내부감사규정
 * 3,0,5: 지속가능경영 > 윤리경영 > 상담/제보 > 제보자 보호규정
 * */
function fnfileDownLoad(idx, num, fileno) {
	//alert("준비중");
	var chk = false;
	if( idx == 3 && num== 0 ){
		if(fileno == 1){
			chk = true;
			location.href="/common/fileDown.do?fileNm=1-1.pdf&downFileNm=1-1. 윤리경영 준수 Massage.pdf";
		}
		else if(fileno == 2){
			chk = true;
			location.href="/common/fileDown.do?fileNm=1-2.pdf&downFileNm=1-2. 윤리규정.pdf";
		}
		else if(fileno == 3){
			chk = true;
			location.href="/common/fileDown.do?fileNm=1-5.pdf&downFileNm=1-5. 윤리경영 실천가이드.pdf";
		}
		else if(fileno == 4){
			chk = true;
			location.href="/common/fileDown.do?fileNm=1-3.pdf&downFileNm=1-3. 내부 감사규정.pdf";
		}
		else if(fileno == 5){
			chk = true;
			location.href="/common/fileDown.do?fileNm=1-4.pdf&downFileNm=1-4. 제보자 보호규정.pdf";
		}
		
	}
	if( chk == false ){
		alert("준비중");		
	}
	return;
}
		