# from django.http.response import JsonResponse
# from .models import Company, Vacancy


# def company_list(request):
#     companies = Company.objects.all()
#     companies_json = [p.to_json() for p in companies]
#     return JsonResponse(companies_json, safe=False, json_dumps_params={'indent': 2})


# def company_detail(request, company_id):
#     try:
#         company = Company.objects.get(pk=company_id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status=400, json_dumps_params={'indent': 2})

#     return JsonResponse(company.to_json(), json_dumps_params={'indent': 2})


# def vacancy_list_by_company(request, company_id):
#     vacancies = Vacancy.objects.filter(company_id=company_id)
#     vacancies_json = [p.to_json() for p in vacancies]
#     return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})


# def vacancy_list(request):
#     vacancies = Vacancy.objects.all()
#     vacancies_json = [p.to_json() for p in vacancies]
#     return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})


# def vacancy_detail(request, vacancy_id):
#     try:
#         vacancy = Vacancy.objects.get(pk=vacancy_id)
#     except Vacancy.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status=400, json_dumps_params={'indent': 2})

#     return JsonResponse(vacancy.to_json(), json_dumps_params={'indent': 2})


# def vacancy_top(request):
#     vacancies = Vacancy.objects.all().order_by('-salary')[:10]
#     vacancies_json = [p.to_json() for p in vacancies]
#     return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})



from django.http import JsonResponse

from . import models, serializer
from rest_framework import viewsets


class CompanyModelViewSet(viewsets.ModelViewSet):
    queryset = models.Company.objects.all()
    serializer_class = serializer.CompanySerializer


class VacanciesModelViewSet(viewsets.ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializer.VacancySerializer


def ByCompany(request, **kwargs):
    vacancies = models.Vacancy.objects.filter(company_id=int(kwargs['id']))
    data = [{
        'id': i.id,
        'name': i.name,
        'description': i.description,
        'salary': i.salary,
    } for i in vacancies]

    return JsonResponse(data=data, safe=False)
